// import { useFormik } from 'formik';
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   Button,
//   Flex,
//   Image,
// } from '@chakra-ui/react';

// const CreateReport = () => {
//   const initialValues = {
//     title: '',
//     body: '',
//     images: ['', '', '', ''], // Placeholder for 4 image URLs
//   };

//   const onSubmit = (values) => {
//     // Handle form submission logic here
//     console.log(values);
//   };

//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//   });

//   return (
//     <Box maxWidth="600px" mx="auto" mt="8">
//       <form onSubmit={formik.handleSubmit}>
//         <FormControl mb="4">
//           <FormLabel>Title</FormLabel>
//           <Input
//             type="text"
//             name="title"
//             onChange={formik.handleChange}
//             value={formik.values.title}
//           />
//         </FormControl>

//         <FormControl mb="4">
//           <FormLabel>Body</FormLabel>
//           <Textarea
//             name="body"
//             onChange={formik.handleChange}
//             value={formik.values.body}
//           />
//         </FormControl>

//         <FormControl mb="4">
//           <FormLabel>Images</FormLabel>
//           <Flex>
//             {formik.values.images.map((imageUrl, index) => (
//               <Box key={index} mr="2">
//                 <Image src={imageUrl} alt={`Image ${index + 1}`} />
//               </Box>
//             ))}
//           </Flex>
//           <Input
//             type="file"
//             name="images"
//             multiple
//             accept="image/*"
//             onChange={(event) => {
//               const files = event.currentTarget.files;
//               const imageUrls = [];

//               for (let i = 0; i < Math.min(4, files.length); i++) {
//                 const imageUrl = URL.createObjectURL(files[i]);
//                 imageUrls.push(imageUrl);
//               }

//               formik.setFieldValue('images', imageUrls);
//             }}
//           />
//         </FormControl>

//         <Button type="submit" colorScheme="blue">
//           Submit
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default CreateReport;


import { useFormik } from 'formik';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex,
  Image,
} from '@chakra-ui/react';

const CreateForm = () => {
  const initialValues = {
    title: '',
    body: '',
    images: ['', '', '', ''], // Placeholder for 4 image URLs
  };

  const onSubmit = (values: any) => {
    // Handle form submission logic here
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <Box mx="auto" mt="4">
      <form onSubmit={formik.handleSubmit}>
        <FormControl mb="4">
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Body</FormLabel>
          <Textarea
            name="body"
            size='2xl'
            onChange={formik.handleChange}
            value={formik.values.body}
          />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Images</FormLabel>
          <Flex>
            {formik.values.images.map((imageUrl, index) => (
              <Box key={index} mr="2">
                <Image src={imageUrl}  />
              </Box>
            ))}
          </Flex>
          <Input
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={(event) => {
              const files = event.currentTarget.files;

              if (files) {
                const imageUrls = [];

                for (let i = 0; i < Math.min(4, files.length); i++) {
                  const imageUrl = URL.createObjectURL(files[i]);
                  imageUrls.push(imageUrl);
                }

                formik.setFieldValue('images', imageUrls);
              }
            }}
          />
        </FormControl>

        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default CreateForm;
