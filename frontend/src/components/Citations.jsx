const isHttpUrl = (url) => /^https?:\/\//i.test(url || "");

export default function Citations({ items }) {
  if (!items?.length) return null;

  return (
    <div className="mt-3 border-t border-composer-line pt-2.5 text-xs text-[#a9b5c4]">
      <strong>Sources</strong>
      {items.map((c, i) => (
        <div key={`${c.title}-${i}`}>
          {isHttpUrl(c.url) ? (
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8bc4ff] no-underline hover:underline"
            >
              {c.title}
            </a>
          ) : (
            c.title
          )}
        </div>
      ))}
    </div>
  );
}
