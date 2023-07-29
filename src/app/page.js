import About from "@/components/About";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Philanthropy from "@/components/Philanthropy";
import Sponsors from "@/components/Sponsors";
import Media from "@/components/Media";
import Title from "@/components/Title";

const Home = () => {
  return (
    <>
      <Landing />
      <section className="w-full" id="media">
        <Title title="MEDIA" />
        <Media />
      </section>
      <section className="w-full" id="about">
        <Title title="ABOUT US" />
        <About />
      </section>
      <section className="w-full" id="philanthropy">
        <Title title="PHILANTHROPY" />
        <Philanthropy />
      </section>
      <section className="w-full" id="sponsors">
        <Title title="SPONSORS" />
        <Sponsors />
      </section>
      <section className="w-full" id="contacts">
        <Title title="CONTACT" />
        <Contact />
      </section>
    </>
  );
};

export default Home;
