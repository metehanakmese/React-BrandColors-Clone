import React, { useState } from "react";
import "./styles.scss";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";

function Sidebar() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <a>
            Brand<b>Colors</b>
          </a>
        </div>

        <div className="description">
          The biggest collection of official brand color codes around. Curated
          by @brandcolors and friends.
        </div>

        <nav className="menu">
          <ul>
            <li>
              <a href="https://github.com/brandcolors/feedback" target="_blank">
                <b>Suggest a Brand</b>
              </a>
            </li>
            <li>
              <a onClick={toggleModal}>
                <b>About BrandColors</b>
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="https://www.designbombs.com/how-to-make-a-website/"
          target="_blank"
        >
          <span>
            Brand<strong>Colors</strong> + DesignBombs
          </span>
          <div className="description1">
            Learn how to make a website - we have put together an in-depth guide
            that will help you build your first website with WordPress
          </div>
        </a>
      </aside>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
        <button className="modal-close-btn" onClick={toggleModal}>
          <GrClose />
        </button>

        <h2>About BrandColors</h2>
        <p>
          BrandColors was created by <b>DesignBombs.</b> The goal was to create
          a helpful reference for the brand color codes that are needed most
          often.
        </p>

        <p>
          t's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot,
          Tuts+, and over <b>2 million pageviews.</b> There are now over{" "}
          <b>600 brands</b> with <b>1600 colors</b> and the collection is always
          growing.
        </p>
      </Modal>
    </>
  );
}

export default Sidebar;
