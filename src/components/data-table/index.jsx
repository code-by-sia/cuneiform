import classNames from 'classnames'
import Icon from '@/components/icon'
import './data-table.scss'
import { View } from '@/components/data-type'

function Cell({
  name,
  index,
  className,
  dataType,
  row,
  view,
  onClick,
  ...props
}) {
  return (
    <td className={className} onClick={onClick}>
      <View
        index={index}
        row={row}
        name={name}
        value={row && row[name]}
        dataType={dataType}
        {...props}
      />
    </td>
  )
}

function Column({ label, name, className, sortable = false }) {
  return (
    <th key={name} className={className}>
      <div>
        <span>{label}</span>
        {sortable && <Icon name="ChevronUpDown" className="icon" />}
      </div>
    </th>
  )
}

export default function DataTable({
  className,
  columns = [],
  data = [],
  onRowClick,
  onCellClick,
  ...rest
}) {
  return (
    <div className={classNames(className, 'data-table')}>
      <div className="wrapper">
        <table>
          <thead>
            <tr>
              {columns.map((it) => (
                <Column
                  key={it.name}
                  label={it.label}
                  name={it.name}
                  sortable={it.sortable}
                  className={it.className}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((row, index) => (
              <tr key={index} onClick={() => onRowClick && onRowClick(row)}>
                {columns.map(
                  ({
                    name,
                    label,
                    sortable,
                    dataType,
                    className: colClassName,
                    ...columnProps
                  }) => (
                    <Cell
                      index={index}
                      key={`${index}_${name}`}
                      name={name}
                      dataType={dataType}
                      className={colClassName}
                      row={row}
                      onClick={(_) =>
                        onCellClick &&
                        onCellClick({
                          name,
                          value: row[name],
                          row,
                        })
                      }
                      {...columnProps}
                      {...rest}
                    />
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
