import React from "react";

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear()

  return (
    <div>
      <footer className="text-center mt-5 text-white bg-dark py-3">
        <p>
          <small>&copy;{year} - Health Care Services. All Rights Reserved.</small>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
