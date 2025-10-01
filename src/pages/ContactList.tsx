import { useState, useEffect, useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { Button } from "@/components/ui/button";
import AdminSidebar from "./AdminSidebar";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    fetch("https://susnavabackend.onrender.com/api/contact")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setContacts(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    setDeleting(id);
    try {
      const res = await fetch(`https://susnavabackend.onrender.com/api/contact/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setContacts((prev) => prev.filter((c) => c._id !== id));
      } else {
        alert("Failed to delete contact");
      }
    } catch {
      alert("Error deleting contact");
    } finally {
      setDeleting(null);
    }
  };

  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "firstName" },
      { Header: "Email", accessor: "email" },
      { Header: "Phone", accessor: "phone" },
      { Header: "Message", accessor: "message" },
      {
        Header: "Actions",
        accessor: "_id",
        Cell: ({ value }) => (
          <Button variant="destructive" className="px-6" disabled={deleting === value} onClick={() => handleDelete(value)}>
            {deleting === value ? "Deleting..." : "Delete"}
          </Button>
        ),
      },
    ],
    [deleting]
  );

  const {
    getTableProps, getTableBodyProps, headerGroups, prepareRow, page,
    canPreviousPage, canNextPage, pageOptions,
    gotoPage, nextPage, previousPage, setPageSize, state: { pageIndex }
  } = useTable(
    { columns, data: contacts, initialState: { pageIndex: 0, pageSize: 5 } },
    usePagination
  );

  if (loading) return <p className="p-6">Loading contacts...</p>;

  return (
    <div className="flex min-h-screen bg-green-50">
      <AdminSidebar />
      <main className="flex-1 p-12 max-w-7xl overflow-auto">
        <h1 className="text-3xl font-bold mb-8 text-green-900">Contact List</h1>
        <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
          <table {...getTableProps()} className="min-w-full rounded-xl">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()} className="bg-green-100">
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()} className="text-left p-4 font-semibold text-green-700 border-b border-gray-300">
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.length === 0 && (
                <tr>
                  <td colSpan={columns.length} className="text-center p-8">No contacts found.</td>
                </tr>
              )}
              {page.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="border-b border-gray-200 hover:bg-green-50 transition">
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()} className="p-4 align-middle">
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center gap-2 mt-8">
          <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>&lt;&lt;</Button>
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>&lt;</Button>
          <Button onClick={() => nextPage()} disabled={!canNextPage}>&gt;</Button>
          <Button onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage}>&gt;&gt;</Button>
          <span className="mx-2">
            Page <strong>{pageIndex + 1} of {pageOptions.length}</strong>
          </span>
          <select
            className="border border-green-300 rounded px-3 py-2"
            onChange={e => setPageSize(Number(e.target.value))}
            defaultValue={5}
          >
            {[5, 10, 20].map(pageSize => (
              <option key={pageSize} value={pageSize}>Show {pageSize}</option>
            ))}
          </select>
        </div>
      </main>
    </div>
  );
};

export default ContactList;
