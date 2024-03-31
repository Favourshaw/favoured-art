import React from "react";

const Contact = () => {
  return (
    <main>
      <section className="top-0 w-full h-96 overflow-hidden relative grid place-items-center">
        <div
          className="absolute inset-0 z-0 h-96"
          style={{
            backgroundImage: `url(src/assets/imgs/contact.jpg)`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="font-rubik text-white z-10 text-8xl">Contact Me</div>
      </section>

      <section className="max-container">
        <div>
          <form action="" className="w-full flex flex-col gap-7 mt-14">
            <label htmlFor="" className="text-black-500 font-semibold">
              Name
              <input type="text" placeholder="Name" className="input" />
            </label>

            <label htmlFor="" className="text-black-500 font-semibold">
              Email
              <input type="text" placeholder="E-mail" className="input" />
            </label>

            <label htmlFor="" className="text-black-500 font-semibold">
              Name
              <textarea
                name="message"
                placeholder="Let me know how i can help you"
                required
                rows={4}
                className="input"
              />
            </label>
            <button type="submit" className="btn">
              {" "}
              Submit{" "}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
