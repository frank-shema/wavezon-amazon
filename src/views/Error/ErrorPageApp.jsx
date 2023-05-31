import MobileHeaderApp from "@/components/template/header/components/MobileHeaderApp";

import lovely_robin from '@/assets/media/error/lovely_robin.jpg';

import return_img from '@/assets/media/error/return_img.png';

import Header from "@/components/template/header/Header";

import Footer from "@/components/template/footer/Footer";

import Menu from "@/components/menu/Menu";

import { Link } from "react-router-dom";

function ErrorPageApp() {
  return (
    <>
      <Header />
      <Menu />
      <MobileHeaderApp />
      <section className='error-page'>
        <div className='error-content'>
          <div>
            <Link to={"/"}>
              <img
                src={return_img}
                alt='error-content'
              />
            </Link>
          </div>
          <div>
            <div className='meet-the-dog'>
              <img
                src={lovely_robin}
                alt='meet-the-dog'
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ErrorPageApp;
