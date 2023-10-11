import prisma from '../../prisma/prisma';
import ClassInviteTable from '../../components/ClassInviteTable';
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Link from 'next/link';
import { getSession } from 'next-auth/react';
import Modal from '../../components/modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export async function getServerSideProps(ctx) {
  const userSession = await getSession(ctx);
  if (!userSession) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return {};
  }

  const userInfo = await prisma.User.findMany({
    where: {
      email: userSession['user']['email']
    }
  });
  if (userInfo[0].role == 'ADMIN') {
    ctx.res.writeHead(302, { Location: '/admin' });
    ctx.res.end();
    // This prevents us from returning undefined prop obj which throws an error.
    return {
      props: {}
    };
  } else if (userInfo[0].role != 'TEACHER') {
    ctx.res.writeHead(302, { Location: '/error' });
    ctx.res.end();
    // This prevents us from returning undefined prop obj which throws an error.
    return {
      props: {}
    };
  }

  const classrooms = await prisma.Classroom.findMany({
    where: {
      classroomTeacherId: userInfo[0].id
    }
  });
  const output = [];
  classrooms.map(classroom =>
    output.push({
      classroomName: classroom.classroomName,
      classroomId: classroom.classroomId,
      description: classroom.description,
      createdAt: JSON.stringify(classroom.createdAt),
      fccCertifications: classroom.fccCertifications
    })
  );

  const superblocksres = await fetch(
    'https://www.freecodecamp.org/curriculum-data/v1/available-superblocks.json'
  );
  const superblocksreq = await superblocksres.json();
  const blocks = [];
  superblocksreq['superblocks'].map((x, i) =>
    blocks.push({ value: i, label: x.dashedName, displayName: x.title })
  );
  return {
    props: {
      userSession,
      classrooms: output,
      user: userInfo[0].id,
      certificationNames: blocks
    }
  };
}

export default function Classes({
  userSession,
  classrooms,
  user,
  certificationNames
}) {
  let [currentClassrooms, setCurrentClassrooms] = useState(classrooms);
  const handleDelete = classToDelete => {
    setCurrentClassrooms(currentClassrooms =>
      currentClassrooms.filter(
        currClass => currClass.classroomId != classToDelete
      )
    );
  };
  const handleEdit = (classToEditId, updatedData) => {
    const updatedClassrooms = currentClassrooms.map(currClass => {
      if (classToEditId == currClass.classroomId) {
        return {
          ...currClass,
          classroomName: updatedData.classroomName,
          description: updatedData.description,
          fccCertifications: updatedData.fccCertifications
        };
      }
      return currClass;
    });
    setCurrentClassrooms(updatedClassrooms);
  };

  return (
    <>
      <ToastContainer
        position='bottom-left'
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme
      />
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {userSession && (
        <>
          <Navbar>
            <div className='border-solid border-2 pl-4 pr-4'>
              <Link href={'/classes'}>Classes</Link>
            </div>
            <div className='border-solid border-2 pl-4 pr-4'>
              <Link href={'/'}> Menu</Link>
            </div>
          </Navbar>

          <div className={'text-center p-10'}>
            <h1> Copy invite code by clicking on your preferred class. </h1>
          </div>

          {
            <Modal
              userId={user}
              certificationNames={certificationNames}
              currentClassrooms={currentClassrooms}
              setCurrentClassrooms={setCurrentClassrooms}
            />
          }
          {currentClassrooms.map(classroom => (
            <div key={classroom.classroomId}>
              <ClassInviteTable
                currentClass={classroom}
                certificationNames={certificationNames}
                currentClassrooms={currentClassrooms}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                userId={user}
              ></ClassInviteTable>
            </div>
          ))}
        </>
      )}
    </>
  );
}