import React, { useState } from "react";
import { Modal, Input } from "antd";
import CardList from "./CardList";
import "antd/dist/antd.css";

const AddCard = () => {
  const [card, setCard] = useState([]);

  const { TextArea } = Input;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setCard([...card, { ...input }]);

    setInput("");
  };

  const handleEdit = () => {
    let temp = card;
    temp[input.id] = input;

    setCard(temp);
    SetIsEdit(false);
    setIsModalVisible(false);
    setInput("");
  };

  const handleCancel = () => {
    setInput("");
    setIsModalVisible(false);
  };

  const [input, setInput] = useState({
    label: "",
    textarea: "",
  });

  let updateSearch;
  const handleSearch = (e) => {
    let ab = e.target.value;
    updateSearch = card.filter((s) =>
      s.label.toLowerCase().includes(ab.toLowerCase())
    );

    if (updateSearch.length) {
      setCard(updateSearch);
    }
  };

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const [isedit, SetIsEdit] = useState(false);

  let newData;
  const deleteData = (data) => {
    newData = card.filter((d) => d.label != data.label);
    setCard(newData);
  };

  const editData = (data) => {
    setIsModalVisible(true);
    setInput(data);
    SetIsEdit(true);
  };

  return (
    <div>
      <div>
        <ul>
          <li>
            <button class="active" onClick={showModal}>
              Click To Add Card
            </button>
          </li>
          <li
            style={{ marginTop: "10px", float: "right", marginRight: "20px" }}
          >
            <Input placeholder="Search Modal" onChange={handleSearch} />
          </li>
        </ul>
      </div>

      <Modal
        title="Add Card"
        visible={isModalVisible}
        onOk={() => (isedit ? handleEdit() : handleOk())}
        onCancel={handleCancel}
      >
        <Input
          name="label"
          value={input.label}
          placeholder="Add Lable"
          onChange={handleInputChange}
          style={{ marginBottom: "16px" }}
        />
        <TextArea
          rows={4}
          name="textarea"
          value={input.textarea}
          onChange={handleInputChange}
        />
      </Modal>
      {card.length ? <h1>Card List</h1> : <h1>Please Add Card .... !</h1>}

      <CardList items={card} editData={editData} deleteData={deleteData} />
    </div>
  );
};

export default AddCard;
