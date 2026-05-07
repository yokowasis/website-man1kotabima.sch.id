import AdminLayout from "../../../components/adminlayout";

const Component = (props) => {
  return (
    <AdminLayout>
      <p>Example Input</p>
      <cs-input
        id="someID"
        type="text"
        theme="mui"
        label="Hello"
        value=""
        icon="cancel"
        note=""
      ></cs-input>
    </AdminLayout>
  );
};

export default Component;
