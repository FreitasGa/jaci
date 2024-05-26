export type NewsBoxProps = {
  title: string;
  author: string;
  url: string;
};

export default function NewsBox({ title, author, url }: NewsBoxProps) {
  return (
    <div className="rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <div className="flex flex-col justify-between p-6 h-full">
        <div className="space-y-2">
          <h3 className="text-base font-bold">{title}</h3>
          <p className="text-sm line-clamp-3 text-gray-500">{author}</p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm mt-4 inline-flex items-center gap-2 text-gray-500 font-bold hover:underline"
        >
          Ler mais
        </a>
      </div>
    </div>
  );
}
