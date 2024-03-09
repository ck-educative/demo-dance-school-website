import { Content, Heading1, EmailLink } from "@/components/Common";
import Link from "next/link";

const Contact: React.FC = () => {
    return (
        <div className="p-10">
            <section>
                <Heading1 text="Contact Us" /> 
                <Content text="Have questions or inquiries? Get in touch with us!"/>
                <Content text="Visit our dance school or contact us via phone or email. We will love to hear from you!"/>
                <Content text="Address:  Avismriti Dance School, Bangalore"/>
                <Content text="Email: ">
                    <EmailLink text="avismirit.danceschool@gmail.com"/>
                </Content>
            </section>
        </div>
    );
}

export default Contact;
