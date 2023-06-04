
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import swal from 'sweetalert';

const image_hosting_token = import.meta.env.VITE_UPLOAD_TOKEN;
const AddItem = () => {
      const [axiosSecure]= useAxiosSecure()
      // const [imageUrl, setImageUrl] = useState('');
      const { register, handleSubmit, formState: { errors },reset } = useForm();
      const image_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
      const onSubmit = async (data) => {
            try {
                  const formData = new FormData();
                  formData.append('image', data.image[0]);

                  const response = await axios.post(`${image_url}`, formData);

                  if (response.data && response.data.data && response.data.data.url) {
                        if (response.data.success) {
                              const imgUrl=response.data.data.display_url;
                              const {name, price,category,recipe}=data;
                              const newMenu = {name,price:parseFloat(price),category,recipe,image:imgUrl}
                              axiosSecure.post('/menu',newMenu)
                              .then(data=>{
                                   if(data.statusText === 'OK'){
                                    swal({
                                          title: "Success!",
                                          text: "Item is added!",
                                          icon: "success",
                                        });
                                        reset()
                                   }
                              })
                              
                        }
                  }
            } catch (error) {
                  console.error('Error uploading image:', error);
            }

      };
      // console.log(imageUrl);
      return (
            <div>
                  <Helmet>
                        <title>Bistro Boss | Add An Item</title>
                  </Helmet>
                  <SectionTitle heading={'ADD an item'} subHeading="What's New?"></SectionTitle>

                  <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-8 bg-slate-100 rounded shadow-md">
                        <div className="mb-4">
                              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                    Recipe Name
                              </label>
                              <input
                                    type="text"
                                    id="name"
                                    {...register('name', { required: 'Recipe Name is required' })}
                                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : ''}`}
                                    placeholder="Enter Recipe Name"
                              />
                              {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                        </div>
                        <div className="flex mb-4">
                              <div className="w-1/2 pr-2">
                                    <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
                                          Category
                                    </label>
                                    <select
                                          id="category"
                                          {...register('category', { required: 'Category is required' })}
                                          className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.category ? 'border-red-500' : ''}`}
                                          placeholder="Select Category"
                                    >
                                          <option value="">Select Category</option>
                                          <option value="pizza">Pizza</option>
                                          <option value="soup">Soup</option>
                                          <option value="dessert">Dessert</option>
                                          <option value="drink">Drink</option>
                                    </select>
                                    {errors.category && <span className="text-red-500 text-sm">{errors.category.message}</span>}
                              </div>
                              <div className="w-1/2 pl-2">
                                    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                                          Price
                                    </label>
                                    <input
                                          type="number"
                                          id="price"
                                          step="0.01"
                                          {...register('price', { required: 'Price is required' })}
                                          className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.price ? 'border-red-500' : ''}`}
                                          placeholder="Enter Price"
                                    />
                                    {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
                              </div>
                        </div>
                        <div className="mb-4">
                              <label htmlFor="recipe" className="block text-gray-700 font-bold mb-2">
                                    Recipe Details
                              </label>
                              <textarea
                                    id="recipe"
                                    {...register('recipe')}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter Recipe Details"
                              />
                        </div>
                        <div className="mb-4">
                              <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
                                    Choose a File
                              </label>
                              <input
                                    type="file"
                                    id="image"
                                    {...register('image', { required: 'image is required' })}
                                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.image ? 'border-red-500' : ''}`}
                                    placeholder="Select File"
                              />
                              {errors.image && <span className="text-red-500 text-sm">{errors.image.message}</span>}
                        </div>
                        <button
                              type="submit"
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                              Add Item
                        </button>
                  </form>


            </div>
      );
};

export default AddItem;