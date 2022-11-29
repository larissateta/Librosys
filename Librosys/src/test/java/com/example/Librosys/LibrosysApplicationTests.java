package com.example.Librosys;

import com.example.Librosys.models.User;
import com.example.Librosys.repositories.UserRepo;
import com.example.Librosys.services.UserServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest
class LibrosysApplicationTests {

	@Autowired
	private UserServiceImpl userService;

	@MockBean
	private UserRepo userRepo;
	@Test
	public void getUsersTest(){
		when(userRepo.findAll()).thenReturn(Stream.of(new User("larissa", "teta", "tetalarissa@gmail.com", "Pierra15"),
				new User("hirwa", "Gabriel", "hirwa@gmail.com", "Hirwa2")).collect(Collectors.toList()));
		assertEquals(2, userService.getAll().size());
	}

	public void getUserByIdTest(){

	}

}
