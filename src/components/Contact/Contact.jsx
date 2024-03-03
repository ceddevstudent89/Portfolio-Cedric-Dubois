import styles from "./Contact.module.css";
import React, { useState } from "react";
import { getImageUrl } from "../../utils";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    const username = formData.get("username");
    const email = formData.get("email");
    const message = formData.get("message");

    form.reset();
    console.log(`Username: ${username} Email: ${email} Message: ${message}`);
    setIsSubmitted(true);

    // Après 1 secondes, réinitialiser l'état isSubmitted à false
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000); // 1000 millisecondes = 1 secondes
  };
  return (
    <section className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <h3>N'hésitez pas à me contacter !</h3>
        <img
          src={getImageUrl("about/aboutImg.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="username" className={styles.label}>
          Votre Nom
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className={styles.input}
          required
        />
        <label htmlFor="email" className={styles.label}>
          Votre Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={styles.input}
          required
        />
        <label htmlFor="message">Votre Message</label>
        <textarea
          id="message"
          name="message"
          minLength={30}
          maxLength={550}
          placeholder="Vous avez un message..."
          required
        ></textarea>
        <button type="submit" className={styles.button}>
          Valider
        </button>
      </form>
      {isSubmitted && (
        <div className={styles.successMessage}>
          Votre message a bien été envoyé !
        </div>
      )}
    </section>
  );
}
