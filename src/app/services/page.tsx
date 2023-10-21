import Container from "@/components/Container";
import MySevrices from "@/components/MySevrices";
import Title from "@/components/Title";

const Servicespage = () => {
  return (
    <Container>
      <Title
        title="My Services"
        className="border-b-[1px] border-b-zinc-600 py-5"
      />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        molestiae officiis, itaque, minima eveniet voluptatem, autem aliquam
        nostrum architecto perferendis cupiditate quas ex dignissimos odit
        soluta deserunt quia unde porro ipsa sint eius voluptas accusamus
        adipisci quam. Accusamus quas, nulla magnam ex sint est dolores
        molestiae natus eos enim vitae veritatis animi, ipsa quis nostrum
        asperiores nobis similique sapiente, expedita odit culpa facilis.
        Praesentium id cupiditate temporibus doloremque, dicta dolores accusamus
        eos enim ratione doloribus labore vitae quisquam, alias dolor, delectus
        laudantium sapiente architecto! Id reiciendis excepturi maiores
        consequatur delectus sequi pariatur asperiores quo praesentium debitis
        est ex, quisquam dolore?
      </p>
      <MySevrices />
    </Container>
  );
};

export default Servicespage;
