import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div
      className="xl:h-screen h-[1200px] bg-cover bg-center bg-[url('/contact_bg.jpg')] relative"
      id="contact"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-16 bg-opacity-50 shadow-xl bg-primary-dark">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
