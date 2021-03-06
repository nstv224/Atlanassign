import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { HiOutlineDatabase } from "react-icons/hi";
import { AiOutlineArrowRight } from "react-icons/ai";

export default class index extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={`${styles.home__topbar} p-4 text-lg`}>
          <div className={styles.navbar__brand}>
            <HiOutlineDatabase className={styles.brand__icon} />
            <p className={`text-xl`}>SQL EDITOR</p>
          </div>
        </div>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            <span className={styles.success}>SQL EDITOR</span>
          </h1>
          <p className={styles.text}>
            <br />
          </p>
          <Link to="/sql-editor">
            <div className={styles.btn}>
              <p className={styles.btn__text}>Open Editor</p>
              <AiOutlineArrowRight className={styles.icon} />
            </div>
          </Link>
        </div>
        <div className={styles.product__container}>
          <Link to="/sql-editor"></Link>
        </div>

        <div className={styles.footer__container}>
          <p className={styles.footer}>
            Copyright@{"nstv"}
            <span className={styles.warning}></span>
          </p>
        </div>
      </div>
    );
  }
}
