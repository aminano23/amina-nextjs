import Card from "@/components/Card";

export default function Home() {
  const users = {
    user1: {
      name: "Бекжан",
      email: "bekjan@gmail.com",
      age: 28,
      location: "Бишкек",
    },
    user2: {
      name: "Айдана",
      email: "aidana@gmail.com",
      age: 32,
      location: "Ош",
    },
    user3: {
      name: "Мария",
      email: "maria@gmail.com",
      age: 25,
      location: "Москва",
    },
    user4: {
      name: "Алексей",
      email: "alexei@gmail.com",
      age: 30,
      location: "Санкт-Петербург",
    },
  };

  return (
    <div className="flex flex-wrap justify-center gap-5 mt-12">
      <Card userData={users.user1} />
      <Card userData={users.user2} />
      <Card userData={users.user3} />
      <Card userData={users.user4} />
    </div>
  );
}
