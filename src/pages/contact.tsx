import ContactForm from "~/components/ContactForm";
import Container from "~/components/Container";
import Navbar from "~/components/Navbar";


export default function ContactPage(){
  return (
    <>
      <Navbar />
      <Container>
        <h1 className="text-3xl drop-shadow font-extrabold pt-1.5">Contact us</h1>
        <section className="flex w-full justify-center pt-16">  
         <ContactForm width="md:w-1/2" />
        </section>
      </Container>    
    </>
  )
}