export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[#ecebe4] py-20 px-6 text-center text-[#1c1c1c]"
    >
      <h2 className="text-3xl font-bold mb-6">聯繫</h2>
      <div className="max-w-xl mx-auto space-y-4 text-lg mb-10">
        <p>
          📧 電子郵件:{" "}
          <a
            href="mailto:info@sarugakumanagement.co.jp"
            className="underline hover:text-[#daddd8] transition"
          >
            info@sarugakumanagement.co.jp
          </a>
        </p>
        <p>
          🏢 猿楽管理株式会社 <br />
          日本東京都豐島區北大塚1-13-17 <br />
          日本綜合地所 大塚大樓 205室
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto">
        <iframe
          title="猿楽管理株式会社 Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.116809431312!2d139.72671141526017!3d35.73792698017901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ddb5769452d%3A0x88d94cc646d5b7d0!2z5pel5pys6Kqe5YWs5Y-457e05Luj5a6u5Lq65rC455Sf5aCx!5e0!3m2!1sja!2sjp!4v1717544688000!5m2!1sja!2sjp"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md shadow-md"
        ></iframe>
      </div>
    </section>
  )
}
