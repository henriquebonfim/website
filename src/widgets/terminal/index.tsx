import { useState, useEffect } from "react";
import "./styles.css";
import { i18n } from "@lingui/core";
import { Trans } from "@lingui/react/macro";

export const Terminal = () => {
  const [time, setTime] = useState<string>(i18n.date(new Date()));

  useEffect(() => {
    setInterval(() => setTime(i18n.date(new Date())), 1000);
  }, []);

  return (
    <div className="terminal">
      <div>
        <p className="bash">#!/bin/bash</p>
      </div>

      <div>
        <p className="message">
          &gt;&nbsp;
          <Trans>Bem vindo ao meu universo!</Trans>
          &nbsp;
          <picture>
            <span className="white-cloud">&#9729;</span>
            <img
              loading="lazy"
              src="logo.webp"
              width={40}
              height={40}
              alt="logo"
            />
          </picture>
        </p>
      </div>

      <div>
        <p className="clock">&gt;&nbsp;{time}</p>
      </div>
    </div>
  );
};
