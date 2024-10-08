import React from 'react';

function Footer() {
  return (
    <footer className="flex flex-col w-full h-fit bg-[#e7e7e7] text-[#444444] px-3 py-2">
      {/* Sección del logo y redes sociales */}
      <div className="flex flex-row">
        <div className="flex flex-col gap-2 justify-center w-[35%]">
          <div className="flex items-center w-full gap-4">
            <img src="../logo.jpg" alt="Logo Preview" width="66" />
            <div className="text-3xl font-bold">FUNDACIÓN RESSURGIR</div>
          </div>
          <div className="grid grid-cols-3 gap-6 w-fit p-4">
            {/* Iconos de redes sociales */}
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a href="https://www.facebook.com/profile.php?id=100069178915958&locale=es_LA"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </div>

        {/* Sección de enlaces legales y newsletter */}
        <div className="flex flex-row w-[65%] justify-end gap-16 text-nowrap">
          <div className="grid grid-cols-1 gap-14">
            <div className="flex flex-col gap-2">
              <div className="font-bold uppercase text-[#1B8FBD] pb-3">Contáctanos</div>
              <a href="#xxx" className="hover:underline">Valle de los chillos, Quito, Ecuador</a>
              <a href="#xxx" className="hover:underline">(593) 96 349 4220</a>
              <a href="#xxx" className="hover:underline">(593) 98 742 7765</a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-bold uppercase text-[#1B8FBD] pb-3">Suscríbete</div>
            <p className="text-[#444444] mb-2">Suscríbete a nuestro boletín.</p>
            <form className="flex items-center">
              <input type="email" name="email" placeholder="Ingresa tu e-mail" className="w-full bg-gray-100 text-gray-700 rounded-l-lg py-3 px-4 focus:outline-none focus:ring-purple-600 focus:border-transparent" required />
              <button type="submit" className="bg-[#E26E7C] text-[#FFFFFF] font-semibold py-3 px-6 rounded-r-lg transition-colors duration-300">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="w-full border-t border-gray-500 my-8"></div>

      {/* Copyright */}
      <div className="text-center">© 2024 Fundación Ressurgir - All rights reserved.</div>
    </footer>
  );
}

export default Footer;