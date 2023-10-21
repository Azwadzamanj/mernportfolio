import Container from "./Container";
import Title from "./Title";

const AboutMe = () => {
  return (
    <section id="#aboutme">
      <Container className="bg-zinc-700 text-zinc-200">
        <Title title="About Me" />
        <p className="text-base tracking-wide mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam
          ratione vitae modi? Nemo rem, unde nihil mollitia iusto amet soluta,
          adipisci corrupti repellat aliquid doloribus dolores accusantium aut
          eveniet libero vel voluptatum cum cupiditate dolor reiciendis atque
          velit sed officia enim!
        </p>
        <p className="mt-2">
          Ipsa distinctio reprehenderit dicta beatae, et inventore impedit
          magnam harum quod eum minus cupiditate, incidunt iusto unde, quisquam
          ad. Consequuntur sed temporibus veritatis laboriosam magni provident.
          Possimus quia nostrum, tempora corrupti rerum commodi cupiditate ullam
          aliquam asperiores temporibus?
        </p>
      </Container>
    </section>
  );
};

export default AboutMe;
