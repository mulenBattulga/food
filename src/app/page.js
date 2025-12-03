import { Appetizerss } from "./Appetizerss";
import Footer from "./Footer";
import { Header } from "./Header";
import { Saladss } from "./Saladss";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Header />
        <img src="./Bigphoto.png/"></img>
        <div className="flex flex-col">
          <Appetizerss />
          <Saladss />
        </div>
        <Footer />
      </div>
    </>
  );
}
