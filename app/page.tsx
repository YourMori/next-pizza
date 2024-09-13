import { Container, Filters, ProductCard, ProductGroupList, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title="Пиццы"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    items: [
                      { price: 120, id: 1 },
                      { price: 120, id: 2 },
                      { price: 120, id: 3 },
                    ],
                  },
                  {
                    id: 2,
                    name: "Пепперони-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    items: [
                      { price: 120, id: 1 },
                      { price: 120, id: 2 },
                      { price: 120, id: 3 },
                    ],
                  },
                  {
                    id: 3,
                    name: "Маргарита-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    items: [
                      { price: 120, id: 1 },
                      { price: 120, id: 2 },
                      { price: 120, id: 3 },
                    ],
                  },
                  {
                    id: 4,
                    name: "Гавайская",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    items: [
                      { price: 120, id: 1 },
                      { price: 120, id: 2 },
                      { price: 120, id: 3 },
                    ],
                  },
                  {
                    id: 5,
                    name: "Грибная",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    items: [
                      { price: 120, id: 1 },
                      { price: 120, id: 2 },
                      { price: 120, id: 3 },
                    ],
                  },
                ]}
              />

              <ProductGroupList
                title="Завтрак"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    items: [
                      { price: 120, id: 1 },
                      { price: 120, id: 2 },
                      { price: 120, id: 3 },
                    ],
                  },
                  {
                    id: 2,
                    name: "Пепперони-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    items: [
                      { price: 120, id: 1 },
                      { price: 120, id: 2 },
                      { price: 120, id: 3 },
                    ],
                  },
                  {
                    id: 3,
                    name: "Маргарита-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    items: [
                      { price: 120, id: 1 },
                      { price: 120, id: 2 },
                      { price: 120, id: 3 },
                    ],
                  },
                  {
                    id: 4,
                    name: "Гавайская",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    items: [
                      { price: 120, id: 1 },
                      { price: 120, id: 2 },
                      { price: 120, id: 3 },
                    ],
                  },
                  {
                    id: 5,
                    name: "Грибная",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    items: [
                      { price: 120, id: 1 },
                      { price: 120, id: 2 },
                      { price: 120, id: 3 },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
