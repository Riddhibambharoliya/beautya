import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const ProductDetails = () => {
  const [isVisible, setIsVisible] = useState(null);
  const [isReadable, setIsReadable] = useState(null);
  const toggleSection = (section) => {
    if (isVisible === section) {
      setIsVisible(null);
      setIsReadable(null);
    } else {
      setIsVisible(section);
    }
  };

  const readableSection = (section) => {
    if (isReadable === section) {
      setIsReadable(null);
    } else {
      setIsVisible(section);
      setIsReadable(section);
    }
  };
  return (
    <>
      <div className="hidden md:flex w-full">
        <ul className="flex fex-row justify-between w-full mx-4 border-b-2 pb-2">
          <li
            onClick={() => toggleSection(1)}
            className={`cursor-pointer ${
              isVisible === 1
                ? "text-[#A10550]"
                : "text-black"
            }`}
          >
            Product Detail
          </li>
          <li
            onClick={() => toggleSection(2)}
            className={`cursor-pointer ${
              isVisible === 2 ? "text-[#A10550]" : "text-black"
            }`}
          >
            How To Apply
          </li>
          <li
            onClick={() => toggleSection(3)}
            className={`cursor-pointer ${
              isVisible === 3 ? "text-[#A10550]" : "text-black"
            }`}
          >
            Ingredient
          </li>
          <li
            onClick={() => toggleSection(4)}
            className={`cursor-pointer ${
              isVisible === 4 ? "text-[#A10550]" : "text-black"
            }`}
          >
            What Makes Is Advance
          </li>
          <li
            onClick={() => toggleSection(5)}
            className={`cursor-pointer ${
              isVisible === 5 ? "text-[#A10550]" : "text-black"
            }`}
          >
            Product Specification
          </li>
        </ul>
      </div>
      <div className="flex flex-col mx-3 bg-white border-t mt-7 md:mt-0">
        <div className="flex flex-col  gap-3 border-b p-3">
          <div
            className="flex flex-row justify-between items-center cursor-pointer"
            onClick={() => toggleSection(1)}
          >
            <h2
              className={`font-bold ${
                isVisible === 1 ? "text-[#A10550]" : "text-black"
              }`}
            >
              Product Detail
            </h2>
            <span className="md:hidden flex">
              {isVisible === 1 ? <span className="text-[#A10550]"><FiMinus /></span> : <FiPlus />}
            </span>
          </div>
          <div
            className={`md:flex overflow-hidden ${
              isReadable === 1 ? "h-auto" : "md:max-h-32 md:h-auto"
            } ${isVisible === 1 ? "block pl-2" : "hidden"}  `}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            illum eius nisi quasi odit, debitis aspernatur, ipsa exercitationem
            consequatur voluptatum ullam repellendus excepturi itaque. Quos
            eligendi dicta voluptatibus explicabo quis, at suscipit tempore
            soluta sequi commodi, quia temporibus autem! Eaque at, commodi porro
            quibusdam deserunt aspernatur cum nisi sint, eos, maxime
            accusantium? Eaque, dignissimos at deserunt numquam magnam et
            dolores, ea soluta dolor sequi ab, reprehenderit optio veniam.
            Adipisci dolor enim iusto fugit libero harum mollitia tenetur
            blanditiis autem delectus ex laboriosam quod illum, expedita eveniet
            reprehenderit temporibus dolorum qui ipsa. Eligendi error expedita
            asperiores eos tenetur voluptatem dolore itaque.
          </div>
          <div>
            <h2
              className="hidden md:flex flex-row items-center gap-1 cursor-pointer text-[#A10550]"
              onClick={() => {
                readableSection(1);
              }}
            >
              Read{" "}
              {isReadable === 1 ? (
                <span className="flex flex-row items-center gap-2">
                  Less <FaChevronLeft />
                </span>
              ) : (
                <span className="flex flex-row items-center gap-2">
                  More <FaChevronRight />
                </span>
              )}
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-b p-3">
          <div
            className="flex flex-row justify-between items-center cursor-pointer"
            onClick={() => toggleSection(2)}
          >
            <h2
              className={`font-bold ${
                isVisible === 2 ? "text-[#A10550]" : "text-black"
              }`}
            >
              How To Apply
            </h2>
            <span className="md:hidden flex">
              {isVisible === 2 ? <span className="text-[#A10550]"><FiMinus /></span> : <FiPlus />}
            </span>
          </div>
          <div
            className={`md:flex overflow-hidden ${
              isVisible === 2 ? "block pl-2" : "hidden"
            } ${isReadable === 2 ? "h-auto" : "md:max-h-32 md:h-auto"}`}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            laudantium nemo, tempora cum quibusdam eum! Iusto, illum ad? Ab,
            voluptas?
          </div>
          <div>
            <h2
              className="hidden md:flex flex-row items-center gap-1 cursor-pointer text-[#A10550]"
              onClick={() => {
                readableSection(2);
              }}
            >
              Read{" "}
              {isReadable === 2 ? (
                <span className="flex flex-row items-center gap-2">
                  Less <FaChevronLeft />
                </span>
              ) : (
                <span className="flex flex-row items-center gap-2">
                  More <FaChevronRight />
                </span>
              )}
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-b p-3">
          <div
            className="flex flex-row justify-between items-center cursor-pointer"
            onClick={() => toggleSection(3)}
          >
            <h2
              className={`font-bold ${
                isVisible === 3 ? "text-[#A10550]" : "text-black"
              }`}
            >
              Ingredient
            </h2>
            <span className="md:hidden flex">
              {isVisible === 3 ? <span className="text-[#A10550]"><FiMinus /></span> : <FiPlus />}
            </span>
          </div>
          <div
            className={`md:flex overflow-hidden ${
              isVisible === 3 ? "block pl-2" : "hidden"
            } ${isReadable === 3 ? "h-auto" : "md:max-h-32 md:h-auto"}`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem corporis vero, porro fugit eligendi aperiam dolorum
            velit, sint vel quae neque totam eos dolorem maxime ullam,
            dignissimos reprehenderit et expedita veniam a ipsam aliquid vitae!
            Voluptate voluptatem libero ea harum perferendis consectetur
            incidunt laborum ex enim? Dolor sunt, quam aliquam consequatur qui
            placeat! Delectus incidunt quo molestias fugiat distinctio sit at
            officiis assumenda error beatae ex itaque provident quasi quas ipsa,
            praesentium eius inventore quibusdam deleniti magni architecto, ab
            laudantium perspiciatis nulla? Dignissimos repudiandae veritatis
            praesentium accusamus nisi odio, nihil error pariatur veniam eius.
            Mollitia magnam deleniti aliquid corrupti tempore!
          </div>
          <div>
            <h2
              className="hidden md:flex flex-row items-center gap-1 cursor-pointer text-[#A10550]"
              onClick={() => {
                readableSection(3);
              }}
            >
              Read{" "}
              {isReadable === 3 ? (
                <span className="flex flex-row items-center gap-2">
                  Less <FaChevronLeft />
                </span>
              ) : (
                <span className="flex flex-row items-center gap-2">
                  More <FaChevronRight />
                </span>
              )}
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-b p-3">
          <div
            className="flex flex-row justify-between items-center cursor-pointer"
            onClick={() => toggleSection(4)}
          >
            <h2
              className={`font-bold ${
                isVisible === 4 ? "text-[#A10550]" : "text-black"
              }`}
            >
              What Makes Is Advance
            </h2>
            <span className="md:hidden flex">
              {isVisible === 4 ? <span className="text-[#A10550]"><FiMinus /></span> : <FiPlus />}
            </span>
          </div>
          <div
            className={`md:flex overflow-hidden ${
              isVisible === 4 ? "block pl-2" : "hidden"
            } ${isReadable === 4 ? "h-auto" : "md:max-h-32 md:h-auto"}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            adipisci enim voluptatum impedit odio eligendi quibusdam repellendus
            quam rem doloremque esse distinctio sint suscipit atque
            necessitatibus numquam animi placeat harum, repudiandae quia at
            veniam. Tempora omnis, voluptatum harum odio veritatis similique
            iure adipisci pariatur maiores provident consequatur? Fuga vero
            doloremque quo, voluptate, inventore sed aspernatur, recusandae
            ullam eius iusto possimus consequuntur sint fugiat cupiditate
            sapiente dolore! Excepturi, veritatis culpa veniam rem voluptates
            beatae quam odit cumque, sunt at iure quia placeat aperiam error
            magnam optio illo labore suscipit exercitationem ea hic inventore
            incidunt nesciunt. Harum voluptatum tenetur laudantium magnam
            commodi?
          </div>
          <div>
            <h2
              className="hidden md:flex flex-row items-center gap-1 cursor-pointer text-[#A10550]"
              onClick={() => {
                readableSection(4);
              }}
            >
              Read{" "}
              {isReadable === 4 ? (
                <span className="flex flex-row items-center gap-2">
                  Less <FaChevronLeft />
                </span>
              ) : (
                <span className="flex flex-row items-center gap-2">
                  More <FaChevronRight />
                </span>
              )}
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-b p-3">
          <div
            className="flex flex-row justify-between items-center cursor-pointer"
            onClick={() => toggleSection(5)}
          >
            <h2
              className={`font-bold ${
                isVisible === 5 ? "text-[#A10550]" : "text-black"
              }`}
            >
              Product Specification
            </h2>
            <span className="md:hidden flex">
              {isVisible === 5 ? <span className="text-[#A10550]"><FiMinus /></span> : <FiPlus />}
            </span>
          </div>
          <div
            className={`md:flex overflow-hidden ${
              isVisible === 5 ? "block pl-2" : "hidden"
            } ${isReadable === 5 ? "h-auto" : "md:max-h-32 md:h-auto"}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
            quae. Optio et laboriosam, iste necessitatibus totam officia in!
            Similique sequi aliquam error sint deserunt obcaecati minus
            reprehenderit sapiente provident eum! Quis exercitationem molestiae,
            a enim, tempore mollitia tempora veritatis nihil blanditiis
            consequatur saepe. Error vitae quisquam consequatur quasi quas
            repellendus natus id similique aliquam quibusdam hic non nulla
            soluta tenetur corporis, corrupti numquam. Nihil corrupti maxime
            expedita eveniet quia architecto minima tenetur aperiam distinctio,
            incidunt atque et excepturi labore sit dolorem praesentium earum
            quod vel eos laborum temporibus dignissimos hic! Quibusdam, sequi
            autem est error minima at eos atque nemo laudantium maiores dolores
            ipsum magnam consequuntur cupiditate nostrum commodi similique
            doloremque mollitia nisi dolore ex consequatur optio distinctio.
            Magni optio saepe quo temporibus ad excepturi, quod accusantium
            officiis fugit quidem. Sit excepturi praesentium obcaecati
            asperiores ex quam similique molestias. Aperiam, amet quos neque
            voluptas hic veritatis quo reprehenderit? Qui, quo? Atque
            voluptatem, corporis id odit, pariatur tempore beatae ad ut eos vero
            nisi laboriosam. Itaque, nam illo ea unde possimus veniam quasi
            corrupti quas? Cum adipisci consequuntur perferendis vero, vel
            libero excepturi. Voluptatum aperiam quis et in hic facere
            reprehenderit corporis omnis, adipisci ipsa, dolores, asperiores
            velit. Excepturi, harum obcaecati.
          </div>
          <div>
            <h2
              className="hidden md:flex flex-row items-center gap-1 cursor-pointer text-[#A10550]"
              onClick={() => {
                readableSection(5);
              }}
            >
              Read{" "}
              {isReadable === 5 ? (
                <span className="flex flex-row items-center gap-2">
                  Less <FaChevronLeft />
                </span>
              ) : (
                <span className="flex flex-row items-center gap-2">
                  More <FaChevronRight />
                </span>
              )}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
