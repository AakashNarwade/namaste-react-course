const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-2 rounded-md"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2 rounded-md"
        />
        <button className="border border-black p-2 m-2 rounded-md bg-gray-50">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
