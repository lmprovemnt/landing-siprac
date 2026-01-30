import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import Location from "@/components/contact/Location";
import FAQ from "@/components/contact/FAQ";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <Location />
            <FAQ />
        </div>
    );
}
