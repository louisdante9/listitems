export default async function insertData() {
  await new Promise(resolve => setTimeout(resolve, 60000));
  console.log('Done!')
}
