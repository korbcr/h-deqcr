//import React from "react";
import Team3 from "../../components/Team3";
import MainLayout from "../../layouts/main";
import Video2 from "../../components/Video2";
import LastProjects from "../../components/LastProjects";
import AboutUs8 from "../../components/About-Us8";
import Services7 from "../../components/Services7";
import Testimonials1 from "../../components/Testimonials1";
import WorkWithoutFilter from "../../components/Work-Without-Filter";
import IntroWithVertical2 from "../../components/Intro-with-vertical2";
import Portfolio2 from "../../components/Portfolio2";
/*
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const token =
    "4224f5ef2a49a358957778b94bba2c877034ac7174519e5d961cb324e1fb0eb09e5aa1cd1870d395da86b38ff08af31132c9b97d6649440c7b7556048c6ffe6d576e6b513f7f31e1a004becdef899679818866f458ba6d5f45325ec9de5dbf40bd9d181f0d9d0e4c59caf72238c54aed54c41b7940ee0657be6a49a22db8a2f3";
  const res = await fetch("http://localhost:1337/api/posts", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res);
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
*/

const Home7 = ({ content }) => {
  console.log(content); // Este debería mostrar los posts que vienen de getStaticProps

  /*
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  });
  */
  return (
    <MainLayout>
      <IntroWithVertical2 slider={content.data.slider} />
      <AboutUs8 />
      <Services7 services={content.data.services}/>
      {/*<WorkWithoutFilter />*/}
      <Portfolio2 projects={content.data.featured_projects}/>
      {/*<Team3 />*/}
      <Testimonials1 bigTitle />
      <LastProjects projects={content.data.projects}/>
    </MainLayout>
  );
};

/*
export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/posts", {
    method: "GET",
    headers: {
      Authorization: `Bearer 4224f5ef2a49a358957778b94bba2c877034ac7174519e5d961cb324e1fb0eb09e5aa1cd1870d395da86b38ff08af31132c9b97d6649440c7b7556048c6ffe6d576e6b513f7f31e1a004becdef899679818866f458ba6d5f45325ec9de5dbf40bd9d181f0d9d0e4c59caf72238c54aed54c41b7940ee0657be6a49a22db8a2f3`, // Enviar el token en el header
    },
  });

  if (!res.ok) {
    console.error("Error en la solicitud:", res.statusText);
    return { props: { posts: [] } }; // Maneja el error según tus necesidades
  }

  const posts = await res.json();
  return {
    props: {
      posts: posts.data || [], // Asegúrate de manejar la propiedad correctamente
    },
  };
}
*/

export default Home7;
