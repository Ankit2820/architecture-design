// import { useState } from "react";
import emailjs from "@emailjs/browser";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess("");

//     emailjs
//       .send(
//         "YOUR_SERVICE_ID",   // replace with your Service ID
//         "YOUR_TEMPLATE_ID",  // replace with your Template ID
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           message: formData.message,
//         },
//         "YOUR_PUBLIC_KEY"    // replace with your Public Key
//       )
//       .then(
//         () => {
//           setSuccess("Message sent successfully!");
//           setFormData({ name: "", email: "", message: "" });
//           setLoading(false);
//         },
//         (error) => {
//           console.error(error);
//           setSuccess("Failed to send message. Try again.");
//           setLoading(false);
//         }
//       );
//   };

//   return (
//     <section id="contact" className="min-h-screen bg-[#fff5ea] flex items-center justify-center px-4">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 md:p-8">
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
//           Contact Us
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
//             />
//           </div>

//           {/* Message */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Message</label>
//             <textarea
//               name="message"
//               rows="4"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
//             ></textarea>
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition disabled:opacity-50"
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>

//           {success && (
//             <p className="text-center text-sm mt-2 text-green-600">
//               {success}
//             </p>
//           )}
//         </form>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const form = new FormData();
    form.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: form,
        }
      );

      const result = await response.json();

      if (result.success) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess("Failed to send message.");
      }
    } catch (error) {
      setSuccess("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#fff5ea] flex items-center justify-center px-4"
    >
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success Message */}
          {success && (
            <p className="text-center text-sm mt-2 text-green-600">
              {success}
            </p>
          )}

        </form>
      </div>
    </section>
  );
}

