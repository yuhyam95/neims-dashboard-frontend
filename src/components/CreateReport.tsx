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
    images: ['', '', '', ''], 
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <Box mt="4">
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
            h='250px'
            name="body"
            size='5xl'
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