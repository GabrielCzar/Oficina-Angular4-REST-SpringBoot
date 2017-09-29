package com.patrimonioapi.resource;

import com.patrimonioapi.model.Item;
import com.patrimonioapi.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin("${origem-permitida}")
@RequestMapping("/itens")
public class ItemResource {
	
	@Autowired
	private ItemRepository itemRepository;

	@GetMapping
	public List<Item> listar() {
		return itemRepository.findAll();
	}

	@PostMapping
	public Item adicionar(@RequestBody @Valid Item item) {
		return itemRepository.save(item);
	}

}
