import GlassCard from "@/components/ui/glass-card";

interface Props {
  items: string[];
}

const emojiMap: Record<string, string> = {
  hoodie: "🧥",
  jacket: "🧥",
  umbrella: "☂️",
  cap: "🧢",
  sunglasses: "😎",
  sneakers: "👟",
  tank: "👕",
  tshirt: "👕",
};

export default function ClothingBoard({
  items,
}: Props) {
  return (
    <GlassCard className="p-6">

      <h2 className="mb-5 text-xl font-semibold">
        Streetwear Mood Board
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {items.map((item, index) => {

          const lower =
            item.toLowerCase();

          let emoji = "👕";

          Object.entries(
            emojiMap
          ).forEach(([key, value]) => {
            if (
              lower.includes(key)
            ) {
              emoji = value;
            }
          });

          return (
            <div
              key={index}
              className="
                rounded-xl
                glass-card
                p-4
                text-center
              "
            >
              <div className="mb-2 text-4xl">
                {emoji}
              </div>

              <p className="text-sm">
                {item}
              </p>
            </div>
          );
        })}

      </div>

    </GlassCard>
  );
}