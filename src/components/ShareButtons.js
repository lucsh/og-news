import React from 'react';
import { IoLogoTwitter, IoLogoWhatsapp, IoLogoFacebook } from 'react-icons/io';
function ShareButtons({ text, link }) {
  return (
    <section className="float-right py-4">
      <div className="text-md">Compartí esta noticia</div>
      <div className="flex">
        <a
          type="submit"
          rel="noopener noreferrer"
          target="_blank"
          className="p-4"
          href={`https://twitter.com/intent/tweet?text=${encodeURI(text)} ${link}`}
          onClick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;"
        >
          <IoLogoTwitter />
        </a>
        <a
          type="submit"
          rel="noopener noreferrer"
          target="_blank"
          className="p-4"
          href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
          onClick="window.open(this.href, 'facebook-share','width=580,height=296');return false;"
        >
          <IoLogoFacebook />
        </a>

        <a
          type="submit"
          rel="noopener noreferrer"
          target="_blank"
          className="p-4"
          href={`whatsapp://send?text=${encodeURI(text)} ${link}`}
          onClick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;"
        >
          <IoLogoWhatsapp />
        </a>
      </div>
    </section>
  );
}

export default ShareButtons;
