let forms = [
  {
    id: 1995,
    slug: "nlidbslibailngagnlinlgseng",
    title: "Santa Monica",
    amount: "$10,800",
    createdAt: "12/05/1995",
  },
  {
    id: 2000,
    slug: "nlidbslibailfgthdlgseng",
    title: "Stankonia",
    amount: "$8,000",
    createdAt: "10/31/2000",
  },
  {
    id: 2003,
    slug: "nlidbjtkdgnlinlgseng",
    title: "Ocean Avenue",
    amount: "$9,500",
    createdAt: "07/22/2003",
  },
  {
    id: 1997,
    slug: "nlidbsjukrjfnlinlgseng",
    title: "Tubthumper",
    amount: "$14,000",
    createdAt: "09/01/1997",
  },
  {
    id: 1998,
    slug: "nlijytjftlinlgseng",
    title: "Wide Open Spaces",
    amount: "$4,600",
    createdAt: "01/27/1998",
  },
];

export function getForms(slug?: string) {
  return forms;
}

export function getForm(slug: string) {
  return forms.find(form => form.slug === slug);
}