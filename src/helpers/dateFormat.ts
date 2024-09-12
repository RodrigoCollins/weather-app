export const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat("es-ES", { dateStyle: "full" }).format(
    new Date(dateString)
  );
};
