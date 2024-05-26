export type NewsBoxProps = {
  title: string;
  author: string;
  url: string;
};

export default function NewsBox({ title, author, url }: NewsBoxProps) {
  let parsedTitle = title.split(" - ")[0].replace(";", ".");
  parsedTitle = parsedTitle.replace(
    /\.\s[a-z]/g,
    (match) => `${match.slice(0, -1)} ${match.slice(-1).toUpperCase()}`
  );

  return (
    <div className="rounded-lg border shadow-sm">
      <div className="flex flex-col justify-between px-6 py-4 h-full">
        <div className="space-y-2">
          <h3 className="text-base line-clamp-2">{parsedTitle}</h3>
          <p className="text-sm font-bold">{author}</p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm mt-4 text-[#12664f] font-bold hover:underline"
        >
          Ler mais
        </a>
      </div>
    </div>
  );
}
