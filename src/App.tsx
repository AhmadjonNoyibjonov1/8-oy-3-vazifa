import React, { useState } from "react";

interface CardData {
  input1: string;
  input2: string;
  input3: string;
}

const App: React.FC = () => {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [input3, setInput3] = useState<string>("");
  const [cards, setCards] = useState<CardData[]>([]);
  const [isEditing, setIsEditing] = useState<number | null>(null);

  const [errors, setErrors] = useState({
    input1: "",
    input2: "",
    input3: "",
  });

  const validateInputs = () => {
    let valid = true;
    let newErrors = { input1: "", input2: "", input3: "" };

    if (input1.length < 3) {
      newErrors.input1 = "Username must be at least 3 characters long.";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input2)) {
      newErrors.input2 = "Invalid email format.";
      valid = false;
    }

    const urlRegex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;
    if (!urlRegex.test(input3)) {
      newErrors.input3 = "Invalid URL format.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateInputs()) {
      const newCard = { input1, input2, input3 };

      if (isEditing !== null) {
        const updatedCards = cards.map((card, index) =>
          index === isEditing ? newCard : card
        );
        setCards(updatedCards);
        setIsEditing(null);
      } else {
        setCards([...cards, newCard]);
      }

      setInput1("");
      setInput2("");
      setInput3("");
      setErrors({ input1: "", input2: "", input3: "" });
    }
  };

  const handleDelete = (index: number) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    const cardToEdit = cards[index];
    setInput1(cardToEdit.input1);
    setInput2(cardToEdit.input2);
    setInput3(cardToEdit.input3);
    setIsEditing(index);
  };

  return (
    <div className="p-4">
      <div className="mx-auto w-[600px]">
        <h1 className="text-xl mb-4 text-[32px] font-bold text-[brown]">Create Cards</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              placeholder="Enter username..."
              className={`border p-2 rounded outline-none w-full ${
                errors.input1 ? "border-red-500" : "border-blue-400"
              }`}
            />
            {errors.input1 && <p className="text-red-500">{errors.input1}</p>}
          </div>
          <div>
            <input
              type="email"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              placeholder="Enter email..."
              className={`border p-2 rounded outline-none w-full ${
                errors.input2 ? "border-red-500" : "border-blue-400"
              }`}
            />
            {errors.input2 && <p className="text-red-500">{errors.input2}</p>}
          </div>
          <div>
            <input
              type="url"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
              placeholder="Enter avatar URL..."
              className={`border p-2 rounded outline-none w-full ${
                errors.input3 ? "border-red-500" : "border-blue-400"
              }`}
            />
            {errors.input3 && <p className="text-red-500">{errors.input3}</p>}
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            {isEditing !== null ? "Update Card" : "Add Card"}
          </button>
        </form>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="border-[4px] border-blue-700 p-4 rounded-[20px] text-center bg-[antiquewhite]">
            <img
              src={card.input3}
              alt="Avatar"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <p>
              <strong>Username:</strong> {card.input1}
            </p>
            <p>
              <strong>Email:</strong> {card.input2}
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={() => handleEdit(index)}
                className="bg-yellow-500 text-white p-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
