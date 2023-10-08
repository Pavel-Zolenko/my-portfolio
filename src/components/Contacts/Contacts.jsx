import { useForm } from 'react-hook-form';
import { FaTelegramPlane, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import {
  FormContainer,
  ContactList,
  Form,
  Input,
  TextArea,
  SendBtn,
  ContactSpan,
  ContactLink,
} from './Contacts.styled';

export const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { name: '', email_from: '', question: '' } });

  const onSubmit = data => console.log(data);

  return (
    <FormContainer id="contacts">
      <ContactList>
        <li>
          <ContactLink href="https://t.me/donferdev" target="_blank">
            <FaTelegramPlane size="32" />
            <ContactSpan>@donferdev</ContactSpan>
          </ContactLink>
        </li>
        <li>
          <ContactLink href="mailto:pobedu8@gmail.com" target="_blank">
            <MdOutlineEmail size="32" />
            <ContactSpan>pobedu8@gmail.com</ContactSpan>
          </ContactLink>
        </li>
        <li>
          <ContactLink
            href="https://www.linkedin.com/in/pavlo-zolenko"
            target="blank"
            aria-label="Linkedin"
          >
            <FaLinkedinIn size="32" />
            <ContactSpan>Linkedin</ContactSpan>
          </ContactLink>
        </li>
        <li>
          <ContactLink
            href="https://github.com/Pavel-Zolenko"
            target="blank"
            aria-label="Github"
          >
            <FaGithub size="32" />
            <ContactSpan>Github</ContactSpan>
          </ContactLink>
        </li>
      </ContactList>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('name', { required: true })} placeholder="Name" />
        <Input
          {...register('email_from', {
            required: true,
            pattern: /^\S+@\S+\.\S+$/,
          })}
          placeholder="Email"
        />
        <TextArea
          {...register('question', { required: true })}
          placeholder="Question"
        />

        {errors.email_from && <span> name This field is required</span>}

        <SendBtn type="submit">SEND</SendBtn>
      </Form>
    </FormContainer>
  );
};
