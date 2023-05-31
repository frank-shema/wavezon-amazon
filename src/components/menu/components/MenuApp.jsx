import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

import { useGlobalContext } from "@/context/useContext";

import { Link, useNavigate } from "react-router-dom";

import { HiBars3CenterLeft } from "react-icons/hi2";

import { RiMapPinUserFill } from "react-icons/ri";

import ReactCountryFlag from "react-country-flag";

import { TfiWorld } from "react-icons/tfi";

function MenuApp() {
  const { open_nav, close_nav, user, sign_out_user, lang } = useGlobalContext();
  const movePage = useNavigate();
  function sign_out() {
    sign_out_user();
    movePage("/");
    // to look like real redirect 👻
    window.location.reload();
  }
  return (
    <>
      <aside id='sub-menu'>
        <ul>
          <li onClick={() => open_nav()}>
            <HiBars3CenterLeft size={20}></HiBars3CenterLeft>
            <h4>{lang.menu.all}</h4>
          </li>
          <li>
            <Link to={"/today-deals"}>
              <p>{lang.menu.today_deals}</p>
            </Link>
          </li>
          <li>
            <Link to={"/account"}>
              <p>{lang.menu.customer_services}</p>
            </Link>
          </li>
          <li>
            <Link to={"/signup"}>
              <p>{lang.menu.registry}</p>
            </Link>
          </li>
          <li>
            <Link to={"/account"}>
              <p>{lang.menu.gift_cards}</p>
            </Link>
          </li>
          <li>
            <Link to={"/account"}>
              <p>{lang.menu.sell}</p>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/today-deals"}>
              <p>{lang.menu.shop_electronics}</p>
            </Link>
          </li>
        </ul>
      </aside>
      {/* side nav */}
      <nav
        id='mySidenav'
        className='sidenav'>
        <div className='side-profile-nav'>
          {user.auth ? (
            <Link
              to={"/account"}
              className='side-profile-nav-link'>
              <RiMapPinUserFill size={20} />
            </Link>
          ) : (
            <Link
              to={"/login"}
              className='side-profile-nav-link'>
              <RiMapPinUserFill size={20} />
            </Link>
          )}
          <h4>
            {user.auth
              ? user.name.length <= 6
                ? `Hello, ${user.name}`
                : `Hello, ${user.name.substring(0, 5) + "..."}`
              : "Hello, guest "}
          </h4>
        </div>
        <div
          className='side-profile-closeNav'
          onClick={() => close_nav()}>
          <button>{lang.menu.close_menu}</button>
        </div>
        <div className='side-content-nav'>
          <div>
            <h3>{lang.menu.trending}</h3>
            <li>
              <Link to={"/today-deals"}>{lang.menu.today_deals}</Link>
            </li>
            <li>{lang.menu.best_sellers}</li>
            <li>{lang.menu.new_releases}</li>
            <li>{lang.menu.movers_and_shakers}</li>
          </div>
        </div>
        <div className='side-content-nav-with-arrow'>
          <div>
            <h3>{lang.menu.digital_content_devices}</h3>
            <li>
              <p>{lang.menu.prime_video}</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>{lang.menu.amazon_music}</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>{lang.menu.echo_alexa}</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>{lang.menu.fire_tablets}</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>{lang.menu.fire_tv}</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>{lang.menu.kindle_e_readers_books}</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>{lang.menu.audible_books_originals}</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>{lang.menu.amazon_photos}</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>{lang.menu.amazon_appstore}</p> <MdKeyboardArrowRight />
            </li>
          </div>
        </div>
        <div className='side-content-nav-with-arrow'>
          <div>
            <h3>{lang.menu.shop_by_department}</h3>
            <li>
              <p>{lang.menu.clothing_shoes_jewelry_watches}</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>{lang.menu.books}</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>{lang.menu.movies_music_games}</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>{lang.menu.electronics}</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>{lang.menu.see_all}</p> <MdKeyboardArrowDown />
            </li>
          </div>
        </div>
        <div className='side-content-nav-with-arrow'>
          <div>
            <h3>{lang.menu.programs_features}</h3>
            <li>
              <p>{lang.menu.same_day_delivery}</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>{lang.menu.whole_foods_market}</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>{lang.menu.one_medical}l</p>
            </li>
            <li>
              <p>{lang.menu.pharmacy}</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>{lang.menu.see_all}</p> <MdKeyboardArrowDown />
            </li>
          </div>
        </div>
        <div className='side-content-nav'>
          <div>
            <h3>{lang.menu.help_setting}</h3>
            <li>
              {user.auth ? (
                <Link to={"/account"}>{lang.menu.your_account}</Link>
              ) : (
                <Link to={"/login"}>{lang.menu.your_account}</Link>
              )}
            </li>
            <li>
              {user.auth ? (
                <Link to={"/orders"}>{lang.menu.returns_orders}</Link>
              ) : (
                <Link to={"/login"}>{lang.menu.returns_orders}</Link>
              )}
            </li>
            <li className='display-flex'>
              <TfiWorld />
              <p className='mx-2'>{lang.language.english}</p>
            </li>
            <li className='display-flex'>
              <ReactCountryFlag
                countryCode='US'
                svg
              />
              <p className='mx-2'>{lang.country.us}</p>
            </li>
            <li onClick={() => sign_out()}>{lang.menu.sign_out}</li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MenuApp;
