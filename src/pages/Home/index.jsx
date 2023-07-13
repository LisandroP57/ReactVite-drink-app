import DrinkList from "../../components/DrinkList";
import DrinkDetailModal from "../../components/DrinkModal";
import SearchForm from "../../components/SearchForm";

export default function Home () {
    return (
        <div>
            <SearchForm />

            <DrinkList />

            <DrinkDetailModal />
        </div>
    )
}