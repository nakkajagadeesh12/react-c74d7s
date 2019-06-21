export function gotTableData(response) {
  return {
    type: 'GOT_TABLE_DATA',
    response
  }
}

export function tableError(error) {
  return {
    type: 'ERR_TABLE',
    error
  }
}