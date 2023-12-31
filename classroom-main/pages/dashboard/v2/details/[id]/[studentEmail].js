import Head from 'next/head';
import Layout from '../../../../../components/layout';
import Link from 'next/link';
import prisma from '../../../../../prisma/prisma';
import Navbar from '../../../../../components/navbar';
import { getSession } from 'next-auth/react';
import React from 'react';

export async function getServerSideProps(context) {
  //making sure User is the teacher of this classsroom's dashboard
  const userSession = await getSession(context);

  const studentEmail = context.params.studentEmail;
  if (!userSession) {
    context.res.writeHead(302, { Location: '/' });
    context.res.end();
    return {};
  }

  const userEmail = await prisma.User.findMany({
    where: {
      email: userSession['user']['email']
    }
  });

  const classroomTeacherId = await prisma.classroom.findUnique({
    where: {
      classroomId: context.params.id
    },
    select: {
      classroomTeacherId: true
    }
  });

  const classroomName = await prisma.classroom.findUnique({
    where: {
      classroomId: context.params.id
    },
    select: {
      classroomName: true
    }
  });

  if (
    classroomTeacherId == null ||
    userEmail[0].id == null ||
    userEmail[0].id !== classroomTeacherId['classroomTeacherId']
  ) {
    context.res.writeHead(302, { Location: '/classes' });
    context.res.end();
    return {};
  }

  return {
    props: {
      userSession,
      studentEmail,
      classroomName: classroomName.classroomName
    }
  };
}

export default function StudentDetails({
  userSession,
  studentEmail,
  classroomName
}) {
  return (
    <Layout>
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
          <h1>
            {studentEmail}&apos;s progress in {classroomName}
          </h1>
        </>
      )}
    </Layout>
  );
}
