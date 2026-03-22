"use client";

import { useEffect, useState } from "react";
import FormInput from "../form/FormInput";
import { API_URL } from "@/core/lib/SystemConfig";
import Loading from "../loading/Loading";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";

export default function GameMain() {
  const [start, setStart] = useState(false);

  const [randomWord, setRandomWord] = useState("");
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");

  const fetchRandomWord = async () => {
    setLoading(true);
    await fetch(`${API_URL}/word`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRandomWord(data ? data[0] : "");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchRandomWord();
  }, []);

  const CheckingWord = async () => {
    if (text === randomWord) {
      toast.success("Correct!");
      fetchRandomWord();
      setText("");
    }
  };

  useEffect(() => {
    CheckingWord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {start ? (
        <>
          <div className="mb-3">
            <div>
              {loading ? (
                <Loading />
              ) : (
                <h1 className="text-light">{randomWord}</h1>
              )}
            </div>
            <FormInput value={text} onChange={(e) => setText(e)} />
          </div>
          <Button variant="primary" onClick={() => setStart(false)}></Button>
        </>
      ) : (
        <Button variant="primary" onClick={() => setStart(true)}>
          Start Game
        </Button>
      )}
    </div>
  );
}
