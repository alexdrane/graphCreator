import React from "react";

export function WriteFunction({ terms }) {
  const showTerms = terms.map(term =>
    Number.isNaN(term.base * term.co)
      ? `
        +${term.co}${term.base}^${term.power}`
      : `+${term.co * term.base}^${term.power}
`
  );
  return <div>{showTerms}</div>;
}
