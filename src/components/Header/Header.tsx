/* APPLICATION */
import { useHeader } from "./hooks/useHeader";
import { LinkItem } from "./components/LinkItem/LinkItem";
import "./Header.css";
import { ModalCreateItem } from "../ModalCreateItem";

export const Header = () => {
  const { createModalActive, isCategories, openCreateModal, closeCreateModal } =
    useHeader();

  return (
    <header className="header">
      <h1 className="header-title">ToDo List</h1>
      <nav className="header-nav">
        <ul className="header-list">
          <LinkItem title="Задачи" url="tasks" isCategories={isCategories} />
          <LinkItem
            title="Категории"
            url="categories"
            isCategories={!isCategories}
          />
        </ul>
        <button className="header-button" onClick={openCreateModal}>
          {isCategories ? "Добавить категорию" : "Добавить задачу"}
        </button>
      </nav>
      <ModalCreateItem
        active={createModalActive}
        closeModal={closeCreateModal}
      />
    </header>
  );
};
