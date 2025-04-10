// Contact.tsx
export default function Contact() {
  return (
    <section
      className="py-20 px-4 w-full max-w-xl mx-auto text-neutral-800"
      id="contact"
    >
      <h2 className="text-3xl mb-6 text-center dark:text-white">CONTATO</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Seu nome"
          className="border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-neutral-500"
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          className="border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-neutral-500"
        />
        <textarea
          placeholder="Sua mensagem"
          rows={5}
          className="border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-neutral-500 resize-none"
        />
        <button
          type="submit"
          className="bg-neutral-800 text-white py-3 rounded-xl hover:bg-neutral-700 transition-colors"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
