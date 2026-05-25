import Card from "@/components/modules/Card/Card";
import { faHourglass2 } from "@fortawesome/free-solid-svg-icons";

function Result({ searchResult }) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-5">Hot Coffee</h1>
            {searchResult?.filter((item) => item.type === "hot").length ? (
              searchResult
                ?.filter((item) => item.type === "hot")
                .slice(0, 3)
                .map((item) => <Card key={item.id} {...item} />)
            ) : (
              <h2>Menu not Found!</h2>
            )}
          </div>

          <div className="col-lg-6">
            <h1 className="mb-5">Cold Coffee</h1>
            {searchResult?.filter((item) => item.type === "cold").length ? (
              searchResult
                ?.filter((item) => item.type === "cold")
                .slice(0, 3)
                .map((item) => <Card key={item.id} {...item} />)
            ) : (
              <h2>Menu not Found!</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Result;
