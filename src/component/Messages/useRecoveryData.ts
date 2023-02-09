import { auth, firestore } from "@/firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { nanoid } from "nanoid";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useToast } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";

const emailRegex = new RegExp(
  /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/
);
const useRecoveryData = () => {
  // const [AuthState] = useAuthState(auth);
  const toast = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const onChangeForm = (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const [errorState, setErrorState] = useState({
    email: "",
    message: "",
    otherErrors: "",
  });

  const returnErrors = () => errorState;

  const SetError = ({
    type,
    error,
    withOutPreset,
    blank,
  }: {
    type: "email" | "otherErrors" | "message";
    error?: string;
    withOutPreset?: true;
    blank?: true;
  }) => {
    const Error = withOutPreset
      ? error
      : blank
      ? ""
      : `${error}, wait 5 seconds and try again.`;
    setErrorState((prevState) => ({
      ...prevState,
      [type]: Error,
    }));
  };

  const ValidateEmail = useCallback(() => {
    if (!emailRegex.test(form.email) && form.email.length > 0) {
      SetError({
        type: "email",
        error: "Email is not valid format",
        withOutPreset: true,
      });

      return;
    } else {
      SetError({ type: "email", blank: true });
    }
  }, [form.email]);

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const response = await sentMessage({
    //   message: form.message,
    //   email: form.email,
    //   name: form.name,
    // });
    // if (response) {
    //   toast({
    //     title: "Message sent",
    //     description: "Your message has been sent successfully",
    //     status: "success",
    //     duration: 9000,
    //     isClosable: true,
    //   });
    //   setForm({
    //     name: "",
    //     email: "",
    //     message: "",
    //   });
    // }
    console.log("submit");
  };

  useEffect(() => {
    ValidateEmail();
  }, [ValidateEmail, form.email]);

  // const sentMessage = async ({
  //   message,
  //   email,
  //   name,
  // }: {
  //   message: string;
  //   email: string;
  //   name: string;
  // }): Promise<boolean> => {
  //   if (!AuthState || !message.length) return false;
  //   try {
  //     const idMessage = nanoid();
  //     const docRef = doc(firestore, "Messages", idMessage);
  //     await setDoc(
  //       docRef,
  //       {
  //         uid: idMessage,
  //         message: message,
  //         email: email,
  //         name: name,
  //         createdAt: serverTimestamp(),
  //         updatedAt: serverTimestamp(),
  //       },
  //       { merge: true }
  //     );
  //   } catch (error) {
  //     toast({
  //       title: "Error",
  //       description: "An error has occurred, try again later",
  //       status: "error",
  //       duration: 9000,
  //       isClosable: true,
  //     });

  //     return false;
  //   }
  //   return true;
  // };

  return { returnErrors, onChangeForm, onSubmitForm };
};

export default useRecoveryData;
