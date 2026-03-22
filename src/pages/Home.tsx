import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'

interface IFormInput {
  firstName: string
  lastName: string
}

interface PersonRow extends IFormInput {
  id: string
}

const inputClass =
  'mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30'

const labelClass = 'block text-sm font-medium text-slate-700'

const Home = () => {
  const [rows, setRows] = useState<PersonRow[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'all',
    defaultValues: { firstName: '', lastName: '' },
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (editingId) {
      setRows((prev) =>
        prev.map((r) => (r.id === editingId ? { ...r, ...data } : r)),
      )
      setEditingId(null)
    } else {
      setRows((prev) => [
        ...prev,
        { id: crypto.randomUUID(), firstName: data.firstName, lastName: data.lastName },
      ])
    }
    reset({ firstName: '', lastName: '' })
  }

  const startEdit = (row: PersonRow) => {
    setEditingId(row.id)
    reset({ firstName: row.firstName, lastName: row.lastName })
  }

  const cancelEdit = () => {
    setEditingId(null)
    reset({ firstName: '', lastName: '' })
  }

  const deleteRow = (id: string) => {
    setRows((prev) => prev.filter((r) => r.id !== id))
    if (editingId === id) cancelEdit()
  }

  return (
    <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          People
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Add, edit, or remove entries. Data is kept in memory for this session.
        </p>
      </div>

      <section
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        aria-labelledby="form-heading"
      >
        <h2 id="form-heading" className="text-lg font-semibold text-slate-900">
          {editingId ? 'Edit person' : 'Add person'}
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 grid gap-5 sm:grid-cols-2"
        >
          <div>
            <label htmlFor="firstName" className={labelClass}>
              First name
            </label>
            <input
              id="firstName"
              type="text"
              autoComplete="given-name"
              placeholder="e.g. Jane"
              className={inputClass}
              {...register('firstName', {
                required: 'First name is required',
                minLength: { value: 1, message: 'Enter a first name' },
              })}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass}>
              Last name
            </label>
            <input
              id="lastName"
              type="text"
              autoComplete="family-name"
              placeholder="e.g. Doe"
              className={inputClass}
              {...register('lastName', {
                required: 'Last name is required',
                minLength: { value: 1, message: 'Enter a last name' },
              })}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors.lastName.message}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {editingId ? 'Update' : 'Add'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      <section
        className="rounded-2xl border border-slate-200 bg-white shadow-sm"
        aria-labelledby="table-heading"
      >
        <div className="border-b border-slate-200 px-6 py-4">
          <h2 id="table-heading" className="text-lg font-semibold text-slate-900">
            Records
          </h2>
          <p className="mt-0.5 text-sm text-slate-600">
            {rows.length === 0
              ? 'No rows yet — use the form above to create one.'
              : `${rows.length} ${rows.length === 1 ? 'row' : 'rows'}`}
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[32rem] text-left text-sm text-slate-700">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  First name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last name
                </th>
                <th scope="col" className="px-6 py-3 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rows.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-10 text-center text-slate-500"
                  >
                    No data to display.
                  </td>
                </tr>
              ) : (
                rows.map((row, index) => (
                  <tr
                    key={row.id}
                    className={
                      editingId === row.id
                        ? 'bg-blue-50/80'
                        : 'bg-white hover:bg-slate-50/80'
                    }
                  >
                    <td className="whitespace-nowrap px-6 py-3 font-medium text-slate-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-3">{row.firstName}</td>
                    <td className="px-6 py-3">{row.lastName}</td>
                    <td className="whitespace-nowrap px-6 py-3 text-right">
                      <div className="inline-flex flex-wrap justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => startEdit(row)}
                          className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteRow(row.id)}
                          className="rounded-md border border-red-200 bg-white px-3 py-1.5 text-xs font-medium text-red-700 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default Home
